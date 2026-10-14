# Physicsmon

Juego educativo de navegador que combina conceptos de física con la mecánica
de captura de criaturas al estilo Pokémon. El jugador "ataca" cada problema con
la fórmula correcta: al acertar la respuesta, captura a la criatura y suma puntos.

Proyecto del equipo *rocket*.

## Cómo funciona

1. Se elige un nivel temático desde el selector.
2. Aparece un enunciado con una criatura salvaje.
3. El jugador introduce el resultado numérico y pulsa **Atacar**.
4. Una respuesta correcta captura a la criatura (+10 puntos) y avanza al
   siguiente problema; una incorrecta muestra retroalimentación para reintentar.

## Niveles

| Nivel | Tema |
|-------|------|
| `electricFields` | Campos eléctricos |
| `electricPotential` | Potencial eléctrico |
| `gaussLaw` | Ley de Gauss |

## Estructura

```
index.html    Estructura de la interfaz (marcado + estilos inline mínimos)
styles.css    Hoja de estilos
script.js     Lógica del juego: problemas por nivel, puntaje y capturas
```

## Ejecutar

No requiere build ni dependencias: abre `index.html` en cualquier navegador.

## Tecnologías

HTML5, CSS3 y JavaScript (DOM).

## Licencia

MIT — ver [LICENSE](LICENSE).
