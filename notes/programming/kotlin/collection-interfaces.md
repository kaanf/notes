---
author: kaanf
authorTitle: Android Developer
authorURL: https://github.com/kaanf
authorImageURL: https://github.com/kaanf.png
tags: [Data Structures, Kotlin, Programming]
---

# collection interfaces

The Kotlin Standard Library has a set of interfaces that help define what’s expected of a particular type. Each of these interfaces provides certain guarantees on characteristics and performance. Of these set of interfaces, four are referred to as `collection interfaces`.

Here’s a s mall sample of what each interface represents: 
* **Tier 1, Iterable:** An iterable type provides sequential access to its elements via an Iterator. 
* **Tier 2, Collection:** A collection type is an iterable type that provides additional functionality, allowing you to check if the collection contains a particular element or a collection of elements. 
* **Tier 3, MutableIterable:** Provides a MutableIterator, which allows items to be removed from the given collection.
* **Tier 4, MutableCollection:** Unlike a simple Collection, a MutableCollection interface provides methods to alter the collection. *For example*, you can add and remove elements, and even clear the entire collection

There’s more to be said for each of these. You’ll learn more about each of them when you need to conform to them. 

A `linked list` can get to the tier 4 of the collection interfaces. Since a linked list is a chain of nodes, adopting the Iterable interface makes sense. And because you’ve already implemented adding elements and removing them, it’s pretty clear we can go all the way to the `MutableCollection` interface.


