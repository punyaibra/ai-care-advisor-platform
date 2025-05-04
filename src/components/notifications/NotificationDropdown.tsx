
import React from 'react';
import { Bell, Check, Trash2 } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useNotifications, Notification } from '@/contexts/NotificationContext';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const NotificationItem = ({ notification }: { notification: Notification }) => {
  const { markAsRead, removeNotification } = useNotifications();
  
  return (
    <div className={cn(
      "flex flex-col p-3 rounded-md",
      notification.read ? "opacity-70" : "bg-health-light"
    )}>
      <div className="flex justify-between items-start">
        <div className="flex-grow">
          <h5 className="font-semibold text-sm">{notification.title}</h5>
          <p className="text-sm text-muted-foreground">{notification.message}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {format(notification.date, 'MMM dd, yyyy - h:mm a')}
          </p>
        </div>
        <div className="flex gap-1 flex-shrink-0">
          {!notification.read && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7" 
              onClick={() => markAsRead(notification.id)}
              title="Mark as read"
            >
              <Check className="h-4 w-4" />
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-destructive" 
            onClick={() => removeNotification(notification.id)}
            title="Delete notification"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export const NotificationDropdown = () => {
  const { notifications, unreadCount, markAllAsRead, clearAllNotifications } = useNotifications();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-health-primary">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <div className="flex justify-between items-center p-2">
          <span className="font-semibold">Notifications</span>
          <div className="flex gap-2">
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs h-8">
                Mark all as read
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={clearAllNotifications} className="text-xs h-8">
              Clear all
            </Button>
          </div>
        </div>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[400px] overflow-y-auto p-1">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No notifications yet
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {notifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
            </div>
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
