toio edge controller
---

An edge controller working on raspberry pi to control [toio](https://toio.io/) robots, which receives instructions via [socket.io](https://socket.io/).
This repo is based on [@Kei18/toio.js-raspi](https://github.com/Kei18/toio.js-raspi) and used in robot demos of [SSSP](https://kei18.github.io/sssp), together with [toio-mrmp](https://github.com/Kei18/toio-mrmp).

## Setup

```sh
sudo bash ./install.sh
```

## Start edge controller
```sh
sudo node ./src/edge_controller.js --addr={YOUR HOST PC}.local -k 1  # number of robots
```

You can find details for parameters with:

```sh
sudo node ./src/edge_controller.js --help
```

## Send instruction

Instruction takes the form of JSON that includes:

- `agent` index of connected toio robots, starting from 0
- `operation` that specifies which function performs
- `parmas`, a list consisting of arguments of `operation`

For example, `cube.move(100, 100, 1000)` in [toio.js](https://github.com/toio/toio.js/) should be sent as follows:

```json
{
    agent: 0,
    operation: "move",
    params: [100, 100, 1000]
}
```

## Licence
This software is released under the MIT License, see [LICENSE.txt](LICENCE.txt).

## Author
[Keisuke Okumura](https://kei18.github.io) is a Ph.D. student at the Tokyo Institute of Technology, interested in controlling multiple moving agents.
