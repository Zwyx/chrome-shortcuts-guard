# chrome-shortcuts-guard

This Chrome extension prevents [specific smarty-pants websites](./src/manifest.json) from messing up the keyboard shortcuts, which can have stupid results on non standard keyboard layouts.

To achieve this, the extension stops the propagation of any keyboard event associated with the Control key, preventing the website from detecting it.

## Installation

- Open `chrome://extensions`
- Activate `Developer mode`
- Click `Load unpacked` and open the src folder of this repo.
