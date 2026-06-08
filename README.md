# Brain Games

[![hexlet-check](https://github.com/Flakyyyyy/brain-games/workflows/hexlet-check/badge.svg)](https://github.com/Flakyyyyy/brain-games/actions)
[![linter](https://github.com/Flakyyyyy/brain-games/workflows/linter/badge.svg)](https://github.com/Flakyyyyy/brain-games/actions)

---

«Игры разума» — набор из пяти консольных мини-игр для тренировки математических навыков и логики. Каждая игра задаёт три вопроса подряд. Три правильных ответа — победа; один неверный — игра завершается с предложением попробовать снова.

## Игры

| Команда | Описание |
|---|---|
| `brain-even` | Чётное число или нет? |
| `brain-calc` | Вычисли арифметическое выражение |
| `brain-gcd` | Найди наибольший общий делитель |
| `brain-progression` | Найди пропущенное число в прогрессии |
| `brain-prime` | Простое число или нет? |

## Требования

- Node.js >= 14.x
- npm >= 6.x

## Установка

Клонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/Flakyyyyy/brain-games.git
cd brain-games
npm install
npm link
```

> На Windows запускайте `npm link` от имени администратора.

---

## Приветствие (`brain-games`)

Просто знакомство с игроком — точка входа в проект.

```bash
brain-games
```



---

## Игра: Чётное число (`brain-even`)

Игроку показывается случайное число. Нужно ответить **yes**, если оно чётное, или **no** — если нечётное.

```bash
brain-even
```



---

## Игра: Калькулятор (`brain-calc`)

Игроку показывается случайное арифметическое выражение — нужно вычислить результат.

```bash
brain-calc
```



---

## Игра: НОД (`brain-gcd`)

Игроку показываются два числа. Нужно найти их наибольший общий делитель.

```bash
brain-gcd
```



---

## Игра: Прогрессия (`brain-progression`)

Игроку показывается арифметическая прогрессия с одним скрытым элементом (`..`). Нужно назвать пропущенное число.

```bash
brain-progression
```



---

## Игра: Простое число (`brain-prime`)

Игроку показывается случайное число. Нужно ответить **yes**, если оно простое, или **no** — если нет.

```bash
brain-prime
```


