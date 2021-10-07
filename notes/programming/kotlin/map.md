---
author: kaanf
authorTitle: Android Developer
authorURL: https://github.com/kaanf
authorImageURL: https://github.com/kaanf.png
tags: [Basics, Kotlin, Programming]
---

# map

A `Map` is another generic collection that holds key-value pairs. For example, here’s a map containing a user’s name and a score:

```kotlin
val scores = mutableMapOf("Kaan" to 9, "Fırat" to 12, "İlknur" to 1)
```

There’s no restriction on what type of object the **Key** is, but you should know that a Map uses the `hashCode()` function to store the data. Usually, the Key is one of the standard library data types which have the `hashCode()` function implemented. But if you want to use your own data type, you need to implement the function yourself. 
It’s not difficult to override `hashCode()`, you just have to investigate a little bit what are the most common strategies to get the best result out of the Map.

You can add a new entry to the map with the following syntax:

```kotlin
scores["Cem"] = 0
```

This creates a new key-value pair in the map:

```kotlin
{Kaan=9, Fırat=12, İlknur=1, Cem=0}
```

Maps are **unordered**, so you can’t guarantee where new entries will be put. This is because maps put data into different buckets, depending on the result that the `hashCode()` function returns. The data in each bucket is ordered, but the general order of the data in the map is unpredictable. 

It is possible to traverse through the key-values of a map multiple times as the Collection protocol affords. This order, while not defined, will be the same until the collection is changed. 

The lack of explicit ordering disadvantage comes with some redeeming traits. 

Unlike the list, maps don’t need to worry about elements shifting around. **Inserting into a map always takes a constant amount of time.**

:::info
Lookup operations also take a constant amount of time, which is significantly faster than finding a particular element in a list which requires a walk from the beginning of the list to the insertion point.
:::

