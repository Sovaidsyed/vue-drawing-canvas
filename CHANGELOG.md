# [v1.0.4](https://github.com/razztyfication/vue-drawing-canvas)

- Reworked multiline of text for watermark

example:

```js
export default {
  ...
  data() {
    return {
      ...
      watermark: {
        type: "Text",
        source: `This is\nWatermark
        TEXT`,
        x: 200,
        y: 180,
        fontStyle: {
          width: 200,
          lineHeight: 48,
          color: '#FF0000',
          font: 'bold 48px roboto',
          drawType: 'fill',
          textAlign: 'left',
          textBaseline: 'top',
          rotate: 0
        }
      }
    }
}
```

<br>

# [v1.0.3](https://github.com/razztyfication/vue-drawing-canvas/tree/v1.0.3)

- Wrap watermark text to multiline. Thanks to [mishahobanov](https://github.com/mishahobanov)

<br>

# [v1.0.2](https://github.com/razztyfication/vue-drawing-canvas/tree/v1.0.2)

- Bug Fix Background Image not update after redraw()

<br>

# [v1.0.1](https://github.com/razztyfication/vue-drawing-canvas/tree/v1.0.1)

- Rename file from .vue to .ts
- Update [README.md](https://github.com/razztyfication/vue-drawing-canvas/blob/master/README.md)
- Added default value on [Watermark Object](https://github.com/razztyfication/vue-drawing-canvas/blob/master/README.md#watermark-object)
- Bug Fix Redo with Background Color instead of white
- Added Props `saveAs`, `strokeType` and `fillShape`

<br>

# [v1.0.0](https://github.com/razztyfication/vue-drawing-canvas/tree/v1.0.0)