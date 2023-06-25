export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export interface StyledTabProps {
    label: string;
}