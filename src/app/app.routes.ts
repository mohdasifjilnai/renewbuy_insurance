import { Routes } from "@angular/router";
import { authGuard } from "./utilis/guard/auth.guard";
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
