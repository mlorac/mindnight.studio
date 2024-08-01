export interface MenuItem {

    label?: string;
    icon?: string;
    command?(event: MenuItemCommandEvent): void;
    url?: string;
    items?: MenuItem[];
    expanded?: boolean;
    disabled?: boolean;
    visible?: boolean;
    target?: string;
    routerLinkActiveOptions?: any;
    tooltip?: string;
    tooltipPosition?: string;
    title?: string;
    id?: string;
    tabindex?: string;
    routerLink?: any;
    fragment?: string;
    preserveFragment?: boolean;
    skipLocationChange?: boolean;
    replaceUrl?: boolean;
}

export interface MenuItemCommandEvent {
    originalEvent?: Event;
    item?: MenuItem;
    index?: number;
}
