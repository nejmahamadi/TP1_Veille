import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lesLettres = lesLettres;
        
        this.elmParent = elementParent
        this.anim_Lettres(this.lesLettres)
        this.fonction = fonction
    }


    anim_Lettres(lesLettres) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        console.log('introduction')
        let elmConteneur = this.creerElement(this.elmParent,'section','','mot')
        let i = 0;
        for(let uneLettre of lesLettres){
                let elmLettres = this.creerElement(elmConteneur, 'div', uneLettre, '')
                uneLettre.style.animationDelay = (i++ * 0.5) + "s";
        }

        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
        elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }

        if (contenu != '') {
            noeud.classList.add(classCss)
        }

        elmParent.appendChild(noeud)
        return noeud
    }

    terminerIntro(evt) {
        this.elmParent.firstChild.classList.add('deplacementContenuIntro')
        this.elmParent.firstChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }

}