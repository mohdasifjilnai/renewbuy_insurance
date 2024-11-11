import { Routes } from "@angular/router";
export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../app/main-inurance/main-inurance.module").then(
        (r) => r.MainInuranceModule
      ),
  },

  { path: "**", redirectTo: "" },
];
