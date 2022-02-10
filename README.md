# 🏰 Tower vs Tower game 🏰

<div align="center">
    <img alt="Project Version" src= "https://img.shields.io/github/v/tag/luigiMinardi/game_Tower_vs_Tower?color=Green&label=Game%20Version&style=for-the-badge">
    <a href="https://github.com/luigiMinardi/game_Tower_vs_Tower/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge">
    </a>
    <img alt="Javascript Version" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
    <img alt="HTML Version" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img alt="CSS Version" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

This is a project made entirely in HTML, CSS and JS. The objective of the project was to made a SPA page game in javaScript vanilla using OOP.

It was a fun project to do, but nowadays we already have good frameworks and ways to create a game with javaScript that is way easier than in vanilla.

To check the website of the game go [here](https://luigiminardi.github.io/game_Tower_vs_Tower/).

# :question: How to play

## ⌛️ Time Limit
The game has a 20 minutes timer where you need to defend yourself from the horde of enemies and attack them within the time limit, if you aren't able to do so, the game ends and you lose.

## ⏩️ Game Speed

I call `round` every time something happens in the game (each "loop" of the game). Each `round` has 500ms (half a seccond).

## 🛡️ Tower

The tower is your base, you need to protect it with your soldiers! And take revenge from those who dares to attack you, **the objective of the game** is to **destroy the enemy tower** before they can do it with yours.

The tower has `1000 hp`.

## ⚔️ Spawns

Right now in the game you have only one option of spawns, but later we will add more as the project continues.

The spawn has `100 hp` and `5 atk` and costs `10 mana`.

## 💧 Mana

The mana generates automatically one time each [round](#%E2%8F%A9%EF%B8%8F-game-speed), the ammount of mana you get will vary accordingly with your mana generator level and you can upgrade it whenever you want. The **upgrade cost** is `75% of the max mana`.

| Level | Mana Produced | Max Mana |
| :---- | :-----------: | -------: |
| 1     |       1       |      100 |
| 2     |      1.2      |      150 |
| 3     |      1.4      |      250 |
| 4     |      1.8      |      350 |
| 5     |      2.5      |      500 |
| 6     |       3       |      100 |

# 🧑‍💻 MVP version (just the minimum to work)

Just for the sake of the curiosity I've created a branch with just the MVP that you can clone by using this command below:

```
git clone -b mvp https://github.com/luigiMinardi/game_Tower_vs_Tower
```