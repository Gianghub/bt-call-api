import React from "react";
import CounterComponent from "@/component/counter";

export default function Home() {
    return (
        <div>
            <h1 className="app-title">Zustand Counter App</h1>
            <CounterComponent />
        </div>
    );
}