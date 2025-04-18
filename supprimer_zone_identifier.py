import os
import sys

def supprimer_zone_identifier(repertoire_depart):
    """
    Parcourt récursivement le répertoire spécifié et supprime tous les fichiers
    se terminant par :Zone.Identifier
    """
    compteur = 0
    
    print(f"Recherche des fichiers :Zone.Identifier dans {repertoire_depart} et ses sous-répertoires...")
    
    for dossier_courant, sous_dossiers, fichiers in os.walk(repertoire_depart):
        for fichier in fichiers:
            if fichier.endswith(":Zone.Identifier"):
                chemin_complet = os.path.join(dossier_courant, fichier)
                try:
                    os.remove(chemin_complet)
                    compteur += 1
                    print(f"Supprimé: {chemin_complet}")
                except Exception as e:
                    print(f"Erreur lors de la suppression de {chemin_complet}: {e}")
    
    print(f"\nTerminé! {compteur} fichiers :Zone.Identifier ont été supprimés.")

if __name__ == "__main__":
    # Utilise le répertoire courant comme point de départ
    repertoire_depart = os.getcwd()
    
    # Vous pouvez également spécifier un répertoire en argument
    if len(sys.argv) > 1:
        repertoire_depart = sys.argv[1]
    
    supprimer_zone_identifier(repertoire_depart) 