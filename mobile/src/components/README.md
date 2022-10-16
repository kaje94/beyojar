## Components

All reusable components can be found within this sub folder. \
A [component driven](https://www.componentdriven.org) approach has been followed along with [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design) in order to organize the components and increase consistency and modularity throughout the project

Components have been grouped as follows

    ├── components              # All the reusable components of the app
    |   ├── atoms               # Smallest building blocks (Mostly consisting of styled system components)
    |   ├── molecules           # Group of atomic components together
    |   ├── organisms           # Groups of atom/molecules together with stateful logic
    |   ├── templates           # Reusable templates for each screen built with other components
    |   ├── hoc                 # Higher order components that extract out reusable component logic
