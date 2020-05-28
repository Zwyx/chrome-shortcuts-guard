# GFH

Make the [bepo-xxerty](https://github.com/Zwyx/bepo-xxerty) customised keyboard work on GitHub.

GitHub has a special way of managing keyboard events, making bepo-xxerty not working correctly when using a keyboard shortcut with the Control key. This simple Chrome extension stops the propagation of any keyboard event with the Control key activated, preventing GitHub from detecting it, and making the wanted action to happen.

## Installation

- Open `chrome://extensions`
- Activate Developer mode
- Click Load unpacked and open the src folder of this repo.
