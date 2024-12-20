const fs = require('fs')

// Lecture d'un fichier
fs.readFile('exemple.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture:', err)
    return
  }
  console.log('Contenu du fichier:', data)
})

// Écriture dans un fichier (écrase le contenu existant)
const contenu = 'Voici le nouveau contenu du fichier'
fs.writeFile('exemple.txt', contenu, 'utf8', (err) => {
  if (err) {
    console.error('Erreur d\'écriture:', err)
    return
  }
  console.log('Le fichier a été écrit avec succès')
})

// Ajout de contenu à la fin du fichier
const contenuAAjouter = '\nNouvelle ligne ajoutée'
fs.appendFile('exemple.txt', contenuAAjouter, 'utf8', (err) => {
  if (err) {
    console.error('Erreur lors de l\'ajout:', err)
    return
  }
  console.log('Contenu ajouté avec succès')
})

// Modification d'un fichier (lecture puis écriture)
fs.readFile('exemple.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture:', err)
    return
  }
  
  // Modifier le contenu
  const contenuModifie = data.replace('ancien texte', 'nouveau texte')
  
  // Réécrire le fichier avec le contenu modifié
  fs.writeFile('exemple.txt', contenuModifie, 'utf8', (err) => {
    if (err) {
      console.error('Erreur d\'écriture:', err)
      return
    }
    console.log('Fichier modifié avec succès')
  })
})
