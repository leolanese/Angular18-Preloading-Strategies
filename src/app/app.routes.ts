import { Route, Routes } from '@angular/router';

export const routes: Route[] = [
    {
      path: "Component1",
      loadComponent: () =>
        import("./components/component1/component1.component").then(
          (m) => m.Component1Component
        ),
      data: { preload: true },
    },
    {
      path: "Component2",
      loadComponent: () =>
        import("./components/component2/component2.component").then(
            (m) => m.Component2Component
        ),
    },
    {
      path: '**',
      redirectTo: ''
    }
  ];
