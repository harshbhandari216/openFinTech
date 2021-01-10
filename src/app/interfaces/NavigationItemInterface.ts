export interface NavigationItem {
    text: string;
    cssClass: 'normal' | 'default' | 'standard' | 'normal addMargin';
    onClick: () => void;
}
