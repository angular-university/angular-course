




# New Angular Template Syntax

## @for vs *ngFor

- less verbose, more intuitive
- The @for now forces developers to use a tracking function, so performance-wise it's safer
- The @for syntax is automatically included in templates, no explicit imports are needed.
- migration available
  

## @if vs *ngIf

- less verbose, more intuitive
- no need for imports
- supports else if and else conditions
- migration available

# How to migrate to the new control flow syntax

Run this command to upgrade your projects:

    ng generate @angular/core:control-flow
