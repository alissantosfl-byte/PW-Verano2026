Comandos Git

1. git init
Descripción: Inicializa un nuevo repositorio Git en una carpeta.

Ejemplo de caso de uso:
git init

Se utiliza al comenzar un proyecto nuevo y se desea controlar versiones con Git.

2. git clone
Descripción: Crea una copia local de un repositorio remoto.

Ejemplo de caso de uso:
git clone https://github.com/usuario/proyecto.git

Se utiliza para descargar un proyecto existente de GitHub.

3. git status
Descripción: Muestra el estado actual de los archivos del repositorio.

Ejemplo de caso de uso:
git status

Se utiliza para verificar qué archivos han sido modificados.

5. git add
Descripción: Agrega archivos al área de preparación (staging).

Ejemplo de caso de uso:
git add README.md

Se utiliza para preparar un archivo antes de realizar un commit.

5. git add .
Descripción: Agrega todos los archivos modificados al área de preparación.

Ejemplo de caso de uso:
git add .

Se utiliza cuando se desean incluir todos los cambios realizados.

6. git commit -m
Descripción: Guarda los cambios preparados en el historial del repositorio.

Ejemplo de caso de uso:
git commit -m "Agregar actividad 1"

Se utiliza para registrar cambios con una descripción.

7. git log
Descripción: Muestra el historial de commits.

Ejemplo de caso de uso:
git log

Se utiliza para revisar cambios realizados anteriormente.

8. git log --oneline
Descripción: Muestra el historial resumido.

Ejemplo de caso de uso:
git log --oneline

Se utiliza para consultar rápidamente los commits.

9. git diff
Descripción: Muestra diferencias entre versiones de archivos.

Ejemplo de caso de uso:
git diff

Se utiliza para revisar cambios antes de un commit.

10. git branch
Descripción: Lista las ramas existentes.

Ejemplo de caso de uso:
git branch

Se utiliza para verificar en qué rama se está trabajando.

11. git branch nombre-rama
Descripción: Crea una nueva rama.

Ejemplo de caso de uso:
git branch desarrollo

Se utiliza para desarrollar nuevas funcionalidades.

12. git checkout
Descripción: Cambia a otra rama.

Ejemplo de caso de uso:
git checkout desarrollo

Se utiliza para trabajar en una rama específica.

13. git switch
Descripción: Cambia de rama utilizando la sintaxis moderna.

Ejemplo de caso de uso:
git switch desarrollo

Se utiliza para moverse entre ramas.

14. git merge
Descripción: Fusiona una rama con la rama actual.

Ejemplo de caso de uso:
git merge desarrollo

Se utiliza para integrar cambios terminados.

15. git remote -v
Descripción: Muestra los repositorios remotos configurados.

Ejemplo de caso de uso:
git remote -v

Se utiliza para verificar la conexión con GitHub.

16. git pull
Descripción: Descarga e integra cambios del repositorio remoto.

Ejemplo de caso de uso:
git pull origin main

Se utiliza para actualizar el repositorio local.

17. git push
Descripción: Envía commits al repositorio remoto.

Ejemplo de caso de uso:
git push origin main

Se utiliza para subir cambios a GitHub.

18. git fetch
Descripción: Descarga cambios remotos sin fusionarlos.

Ejemplo de caso de uso:
git fetch

Se utiliza para revisar cambios antes de integrarlos.

19. git rm
Descripción: Elimina archivos del repositorio.

Ejemplo de caso de uso:
git rm archivo.txt

Se utiliza cuando un archivo ya no es necesario.

20. git reset --hard HEAD
Descripción: Descarta cambios locales no confirmados.

Ejemplo de caso de uso:
git reset --hard HEAD

Se utiliza para volver al último commit guardado.
