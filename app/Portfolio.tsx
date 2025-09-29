"use client"
import { useState } from "react";
import Terminal from "@/components/Terminal";
import Basic from "@/components/Basic";
import SwitchUiMode from "@/components/SwitchUiMode";

type UIMode = 'terminal' | 'basic'

export default function Portfolio() {
    const [ uiMode, setMode ] = useState<UIMode>('basic');

    return (
        <div>
            {uiMode === 'terminal' ? <Terminal/> : <Basic/>}
            <SwitchUiMode
                icon={uiMode === "terminal" ? "🎨" : "💻"}
                onClick={() => setMode(uiMode === "terminal" ? "basic" : "terminal")}/>
        </div>
    );
}