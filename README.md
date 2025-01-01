# React Native FlatList KeyExtractor Bug

This repository demonstrates a common bug in React Native's FlatList component related to the `keyExtractor` prop.  Improperly defining `keyExtractor` can lead to incorrect rendering and unpredictable list item behavior.

## The Problem
Using an index as a key in `keyExtractor` is problematic when the list is dynamically updated (items added or removed).  Changes in data order will not be properly reflected, causing visual issues like items disappearing or appearing incorrectly.

## The Solution
The solution involves ensuring a unique key is generated for each item.  This can typically be achieved using a unique identifier from your data source (e.g., an ID from an API response).

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run the app on an emulator or device.
4. Observe the list's behavior as you add and remove items. Note the inconsistencies in rendering.

## How to Fix
Examine the `bugSolution.js` file to see how to correctly implement `keyExtractor` using unique identifiers.