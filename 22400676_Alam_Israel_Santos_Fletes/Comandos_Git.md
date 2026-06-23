Comandos Git
1. git init
Descripción: Inicializa un nuevo repositorio Git en una carpeta.

Ejemplo de caso de uso:
git init

Se utiliza al comenzar un proyecto nuevo y se desea controlar versiones con Git.

2. git commit -m
Descripción: Guarda los cambios preparados en el historial del repositorio.

Ejemplo de caso de uso:
git commit -m "Agregar actividad 1"

Se utiliza para registrar cambios con una descripción.

3. git log
Descripción: Muestra el historial de commits.

Ejemplo de caso de uso:
git log

Se utiliza para revisar cambios realizados anteriormente.

4. git checkout
Descripción: Cambia a otra rama.

Ejemplo de caso de uso:
git checkout desarrollo

Se utiliza para trabajar en una rama específica.

5. git add
Descripción: Agrega archivos al área de preparación (staging).

Ejemplo de caso de uso:
git add README.md

Se utiliza para preparar un archivo antes de realizar un commit.

6. git status
Descripción: Muestra el estado actual de los archivos del repositorio.

Ejemplo de caso de uso:
git status

Se utiliza para verificar qué archivos han sido modificados.

7. git branch
Descripción: Lista o crea ramas dentro del repositorio.

Ejemplo de caso de uso:
git branch desarrollo

Se utiliza para crear una nueva rama de trabajo.

8. git merge
Descripción: Fusiona una rama con la rama actual.

Ejemplo de caso de uso:
git merge desarrollo

Se utiliza para integrar cambios de una rama al proyecto principal.

9. git clone
Descripción: Crea una copia local de un repositorio remoto.

Ejemplo de caso de uso:
git clone https://github.com/usuario/proyecto.git

Se utiliza para descargar un proyecto existente de GitHub.

10. git pull
Descripción: Descarga e integra cambios del repositorio remoto.

Ejemplo de caso de uso:
git pull origin main

Se utiliza para actualizar el repositorio local.

11. git push
Descripción: Envía cambios al repositorio remoto.

Ejemplo de caso de uso:
git push origin main

Se utiliza para subir cambios a GitHub.

12. git fetch
Descripción: Descarga cambios remotos sin fusionarlos.

Ejemplo de caso de uso:
git fetch

Se utiliza para revisar cambios antes de integrarlos.

13. git remote -v
Descripción: Muestra los repositorios remotos configurados.

Ejemplo de caso de uso:
git remote -v

Se utiliza para verificar la conexión con GitHub.

14. git switch
Descripción: Cambia de rama utilizando la sintaxis moderna.

Ejemplo de caso de uso:
git switch desarrollo

Se utiliza para moverse entre ramas.

15. git diff
Descripción: Muestra diferencias entre versiones de archivos.

Ejemplo de caso de uso:
git diff

Se utiliza para revisar cambios antes de un commit.

16. git log --oneline
Descripción: Muestra el historial resumido de commits.

Ejemplo de caso de uso:
git log --oneline

Se utiliza para consultar rápidamente los commits realizados.

17. git revert
Descripción: Revierte los cambios realizados por un commit específico creando un nuevo commit.

Ejemplo de caso de uso:
git revert a1b2c3d

Se utiliza cuando se desea deshacer un commit sin alterar el historial del repositorio.

18. git rm
Descripción: Elimina archivos del repositorio.

Ejemplo de caso de uso:
git rm archivo.txt

Se utiliza cuando un archivo ya no es necesario.

19. git reset --hard HEAD
Descripción: Descarta cambios locales no confirmados.

Ejemplo de caso de uso:
git reset --hard HEAD

Se utiliza para volver al último commit guardado.

20. git config --global user.name
Descripción: Configura el nombre de usuario de Git.

Ejemplo de caso de uso:
git config --global user.name "Alam Santos"

Se utiliza al configurar Git por primera vez.
