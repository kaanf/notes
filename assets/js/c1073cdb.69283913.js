"use strict";(self.webpackChunkdocu_tutorial=self.webpackChunkdocu_tutorial||[]).push([[775],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},146:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={author:"kaanf",authorTitle:"Android Developer",authorURL:"https://github.com/kaanf",authorImageURL:"https://github.com/kaanf.png",tags:["Android","Architecture Components"]},p="the navigation architecture component",c={unversionedId:"android/architecture_components/navigation-architecture-component",id:"android/architecture_components/navigation-architecture-component",isDocsHomePage:!1,title:"the navigation architecture component",description:"Why Do You Need Yet Another Component?",source:"@site/notes/android/architecture_components/navigation-architecture-component.md",sourceDirName:"android/architecture_components",slug:"/android/architecture_components/navigation-architecture-component",permalink:"/notes/android/architecture_components/navigation-architecture-component",editUrl:"https://github.com/kaanf/personal-notes/edit/main/website/notes/android/architecture_components/navigation-architecture-component.md",tags:[{label:"Android",permalink:"/notes/tags/android"},{label:"Architecture Components",permalink:"/notes/tags/architecture-components"}],version:"current",lastUpdatedBy:"kaanf",lastUpdatedAt:1633651110,formattedLastUpdatedAt:"10/8/2021",frontMatter:{author:"kaanf",authorTitle:"Android Developer",authorURL:"https://github.com/kaanf",authorImageURL:"https://github.com/kaanf.png",tags:["Android","Architecture Components"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 git cheat sheet",permalink:"/notes/git"},next:{title:"complexity",permalink:"/notes/programming/data structures/complexity"}},s=[{value:"Why Do You Need Yet Another Component?",id:"why-do-you-need-yet-another-component",children:[]},{value:"Adding the Navigation Architecture Component",id:"adding-the-navigation-architecture-component",children:[]},{value:"Navigation Graph",id:"navigation-graph",children:[{value:"Destinations",id:"destinations",children:[]},{value:"Declaring a Start Destination",id:"declaring-a-start-destination",children:[]}]}],d={toc:s};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-navigation-architecture-component"},"the navigation architecture component"),(0,r.kt)("h3",{id:"why-do-you-need-yet-another-component"},"Why Do You Need Yet Another Component?"),(0,r.kt)("p",null,"Navigating between screens \u2014 passing data, handling the back stack, implementing deep links, etc. \u2014 can be complicated. It also comes with quite a bit of boilerplate. To top it off, you should adhere to the new principles of navigation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The app should have a fixed start destination."),(0,r.kt)("li",{parentName:"ul"},"A stack is used to represent the navigation state of an app."),(0,r.kt)("li",{parentName:"ul"},"The Up button never exits your app."),(0,r.kt)("li",{parentName:"ul"},"Up and Back are equivalent within your app\u2019s task."),(0,r.kt)("li",{parentName:"ul"},"Deep linking to a destination or navigating to the same destination should yield the same stack.")),(0,r.kt)("p",null,"By using the Navigation architecture component, you provide a consistent and predictable experience to users \u2014 hassle and boilerplate free."),(0,r.kt)("h3",{id:"adding-the-navigation-architecture-component"},"Adding the Navigation Architecture Component"),(0,r.kt)("p",null,"Open the build.gradle file in the app folder and add the following to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'implementation "android.arch.navigation:navigation-fragment-ktx:1.0.0-alpha05"\nimplementation "android.arch.navigation:navigation-ui-ktx:1.0.0-alpha05"\n')),(0,r.kt)("p",null,"Wondering about the -ktx suffix in the library names? It signifies the Android KTX libraries that are super nice to use with Kotlin by making your code both more concise and readable."),(0,r.kt)("h2",{id:"navigation-graph"},"Navigation Graph"),(0,r.kt)("p",null,"A set of destinations and actions compose an app\u2019s navigation graph:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Navigation Graph Destinations",src:n(1366).Z})),(0,r.kt)("p",null,"The above represents the navigation graph for the Bookmans Treasure app. Nodes represent the screens and arrows show how you navigate between them."),(0,r.kt)("p",null,"You\u2019ll add the navigation graph to the app now."),(0,r.kt)("p",null,"You must first enable the ",(0,r.kt)("strong",{parentName:"p"},"Navigation Editor. Click File \u25b8 Settings")," (or Android Studio \u25b8 Preferences on Mac), choose the ",(0,r.kt)("strong",{parentName:"p"},"Experimental")," category in the left panel, check ",(0,r.kt)("strong",{parentName:"p"},"Enable Navigation Editor"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enable Navigation Editor",src:n(1544).Z})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"OK")," and then restart Android Studio."),(0,r.kt)("p",null,"Now be sure Android is selected in the Project navigator."),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"res")," folder, press ",(0,r.kt)("strong",{parentName:"p"},"command+N (on Mac)")," or ",(0,r.kt)("strong",{parentName:"p"},"Alt+N (on PC)")," (or File \u25b8 New) and select Android Resource File."),(0,r.kt)("p",null,"A dialog to create a new resource will pop up. Under ",(0,r.kt)("strong",{parentName:"p"},"File name"),", enter ",(0,r.kt)("strong",{parentName:"p"},"nav_graph"),". Under",(0,r.kt)("strong",{parentName:"p"}," Resource type"),", select ",(0,r.kt)("strong",{parentName:"p"},"Navigation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Navigation New File",src:n(5479).Z})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"OK"),"."),(0,r.kt)("p",null,"Android Studio will create a new resource directory called navigation with a new file named ",(0,r.kt)("strong",{parentName:"p"},"nav_graph.xml"),". This is where your navigation graph will live."),(0,r.kt)("p",null,"Opening ",(0,r.kt)("strong",{parentName:"p"},"nav_graph.xml"),", you can toggle between the Text editor and the Navigation editor by clicking the tabs at the bottom of the editor window."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nav_graph toggle",src:n(7890).Z})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Text")," tab to open the ",(0,r.kt)("strong",{parentName:"p"},"XML editor"),"."),(0,r.kt)("h3",{id:"destinations"},"Destinations"),(0,r.kt)("p",null,"Each destination represents a screen you can navigate to. By default, the Navigation architecture component includes support for Activities and Fragments. You\u2019ll learn how to add custom types later in this tutorial."),(0,r.kt)("p",null,"Add the following between the navigation tags:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<fragment\n  android:id="@+id/bookSearchFragment"\n  android:name="com.kaanf.android.bookmanstreasure.ui.booksearch.BookSearchFragment"\n  android:label="Book Search Fragment"\n  tools:layout="@layout/fragment_book_search">\n</fragment>\n')),(0,r.kt)("p",null,"You might get an error on the ",(0,r.kt)("inlineCode",{parentName:"p"},"tools:layout")," attribute. To fix it, add ",(0,r.kt)("inlineCode",{parentName:"p"},"tools")," namespace declaration to the navigation tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'xmlns:tools="http://schemas.android.com/tools"\n')),(0,r.kt)("p",null,"You can do this manually or place your cursor on tools:layout and press ",(0,r.kt)("strong",{parentName:"p"},"Alt+Enter (on PC)")," or ",(0,r.kt)("strong",{parentName:"p"},"command+return(on Mac)"),". You\u2019ll get a Quick action pop-up:"),(0,r.kt)("p",null,"Choose ",(0,r.kt)("strong",{parentName:"p"},"Create namespace declaration.")),(0,r.kt)("p",null,"This makes ",(0,r.kt)("inlineCode",{parentName:"p"},"BookSearchFragment")," a destination. ",(0,r.kt)("inlineCode",{parentName:"p"},"Fragment")," destinations have the following attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"android:id"),": A unique resource name for this destination."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"android:name"),": A fully qualified class name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"android:label"),": The Fragment title."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tools:layout"),": The Fragment layout, rendered by the Navigation editor.")),(0,r.kt)("p",null,"Build and run the app. Getting fed up with the blank screen yet?"),(0,r.kt)("h3",{id:"declaring-a-start-destination"},"Declaring a Start Destination"),(0,r.kt)("p",null,"Every app needs a starting point. To declare a starting destination in the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation graph"),", add the following attribute to the navigation tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'app:startDestination="@+id/bookSearchFragment"\n')),(0,r.kt)("p",null,"If the app namespace yields an error, follow the same set of steps you used above for the tools namespace to fix it. Build and run to make sure there are no errors. Seriously \u2014 blank screen, again?"))}u.isMDXComponent=!0},1366:function(e,t,n){t.Z=n.p+"assets/images/app-navigation-graph-df0dab6297dbed2605c75cea6b6e06f2.png"},1544:function(e,t,n){t.Z=n.p+"assets/images/enable_nav_editor-650x436-4a70cf888a1ba19b1d558d7846398736.png"},7890:function(e,t,n){t.Z=n.p+"assets/images/nav-graph-editor-empty-toggle-871beeabe3b29c3c7d3afa0178c32787.png"},5479:function(e,t,n){t.Z=n.p+"assets/images/new-res-file-dialog-5b864611a14b21ab3a0b47429d2ef56d.png"}}]);