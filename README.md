# React useEffect Infinite Loop

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The bug arises from incorrectly updating the state variable (`count`) within the `useEffect` function, causing it to trigger repeatedly.

## Bug Description

The `MyComponent` uses `useState` to manage a counter. The `useEffect` hook attempts to reset the counter to 0 when it exceeds 5. However, this action triggers a re-render, leading to another `useEffect` execution, creating an infinite loop.

## Solution

The solution involves modifying the logic inside the `useEffect` to prevent the continuous state updates.  The solution demonstrates a correct way to manage this situation.