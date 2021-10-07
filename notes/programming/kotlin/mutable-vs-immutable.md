---
author: kaanf
authorTitle: Android Developer
authorURL: https://github.com/kaanf
authorImageURL: https://github.com/kaanf.png
tags: [Basics, Kotlin, Programming]
---

# mutable vs. immutable

There’s a distinction between mutable and immutable data structures in Kotlin. 

When referring to the concept of a `List`, it’s usually referring to the Kotlin’s `MutableList`. Unlike `List`, `MutableList` also has functions for adding and removing elements. Kotlin doesn’t allow a `List` to be changed in any way. 

To change a data structure, you must express this intent by using the `Mutable version` of that data structure. These data structures have functions for adding and removing elements. 

So why would you ever use the immutable version? **For safety. **

Whenever you need to pass your data structure as a parameter, and you want to be sure that the function doesn’t produce a side effect, you should use an immutable collection as the parameter.

```kotlin
fun noSideEffectList(names: List<String>) {
 println(names)
}
fun sideEffectList(names: MutableList<String>) {
 names.add("Cem")
}
fun mutableVsImmutable() {
 val people = mutableListOf("Kaan", "Fırat", "İlknur")
 noSideEffectList(people) // [Kaan, Fırat, İlknur]
 sideEffectList(people) // Adds Cem to the list
 noSideEffectList(people) // [Kaan, Fırat, İlknur, Cem]
}
```

The `sideEffectList` function adds a _Cem_ to it. These kind of side-effects are usually the ones generating bugs. Avoiding them by using a `List` instead of a `MutableList` is preferred.