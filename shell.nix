{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/d81de9fc07060ba680fae01da33aa6390d2a2666.tar.gz") {} }:

with pkgs;

mkShell {
  buildInputs = [
    git
    nodejs-18_x
    nodePackages.pnpm
  ];
}
