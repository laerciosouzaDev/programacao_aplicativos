export{};


declare global {
    interface Window {
        addPeloEnter: (event: KeyboardEvent) => void;
        addTarefa: () => void;
        render: () => void;
    }
}