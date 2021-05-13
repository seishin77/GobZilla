# GobZilla

Quelques scripts GreaseMonkey/TamperMonker/ViolentMonkey/... pour http://games.gobland.fr

## Installation
Vous devez installer [GreaseMonkey](https://addons.mozilla.org/fr/firefox/addon/greasemonkey/) (Firefox) ou [TamperMonkey](https://www.tampermonkey.net/) ou [ViolentMonkey](https://violentmonkey.github.io/) ou similaire sur votre navigateur préféré

puis installez les scripts que vous souhaitez utiliser

**Important :** 
Si vous voulez installer un script ayant un (ou des) script(s) comme pré-requis, vous devez installer en premier les pré-requis puis le script

**Remarque :**
Si vous avez installer des scripts dans le désordre, vous avez deux solutions :
* vous pouvez les réorganiser dans TamperMonkey / GreaseMonkey / ViolentMonkey, à voir pour les autres
* vous réinstallez les scripts mal positionnés (dans le bon ordre cette fois-ci)

## Scripts

Gobland V1
| Script        | Description                       | Pré-requis |
|---------------|-----------------------------------|------------|
| [G1-disable_cloak](https://github.com/seishin77/GobZilla/raw/master/scripts/G1-disable_cloak.user.js) | désactive le vestiaire par défaut | |
| [G1-disable_dla](https://github.com/seishin77/GobZilla/raw/master/scripts/G1-disable_dla.user.js) | désactive la DLA par défaut | |

Gobland V2
| Script        | Description                       | Pré-requis |
|---------------|-----------------------------------|------------|
| | | |


## Développement

Vous pouvez développer des scripts en clonant ce projet et demander qu'ils soient intégrés à GZ via un pull request.
Vous pouvez ajouter des fonctions communes dans `lib/GobZilla.lib.js`

### Instructions de développement

1. Dupliquer les deux fichiers `models/model.meta.js.model` et `models/model.user.js.model` en respectant la convention de nommage ci-dessous
2. Vous pouvez ajouter des fonctions qui pourraient être utilisées dans différents scripts au fichier `lib/GobZilla.lib.js` tout en respectant la convention de nommage ci-dessous
3. Vous pouvez utiliser jQuery (v1.11.1 pour Gobland V1) et jQuery UI (v1.10.4 pour Gobland V1)
4. Vous devez utiliser les méthodes de l'objet GM et non les fonctions GM_* 

### Conventions de nommage 

* Le nom des scripts doivent commencer par G1- (pour une version Gobland V1) ou par G2- (pour une version Gobland V2)
* Les fonctions spécifiques à Gobland V1 (ou V2) doivent être préfixées par G1- (ou G2-)
* Les fonctions communes aux deux versions n'ont pas besoin d'être préfixées
