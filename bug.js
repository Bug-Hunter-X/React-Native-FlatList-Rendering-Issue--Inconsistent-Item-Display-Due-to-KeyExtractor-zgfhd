In React Native, a seemingly innocuous issue can arise when working with FlatList and its keyExtractor prop.  If the keyExtractor function doesn't return a unique key for each item, React Native might not render or update items correctly, leading to unexpected behavior or visual glitches. This is especially problematic when dealing with dynamic data where the order might change.  For example, if you're using an index as a key, and items are added or removed, the index-based keys will be inconsistent, causing issues. This can manifest as items not appearing, disappearing, or flickering unpredictably. 