import sketch from 'sketch'
import UI from 'sketch/ui'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  const doc = sketch.getSelectedDocument();
  const selectedLayers = doc.selectedLayers;
  const selectedCount = selectedLayers.length;

  console.log('------------');
  console.log('layers', selectedLayers.layers);

  let layersToReplace = [];
  const layerNames = [];

  let minNumber = 0;
  let maxNumber = 0;
  let runningTotal = 0;

  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected.')
  } else {
    sketch.UI.message(`${selectedCount} layers selected.`)

    selectedLayers.layers.forEach(layer => {
      if (layer.type === 'SymbolInstance') {
        const overrides = layer.overrides;

        if (overrides && overrides.length) {
          overrides.forEach(override => {
            const affectedLayer = override.affectedLayer;
            if (affectedLayer.type === 'Text' && !affectedLayer.hidden && !affectedLayer.locked ) {
              layersToReplace.push(override);
              layerNames.push(affectedLayer.name);
            }
          });
        }
      }
    });

    if (layersToReplace.length) {
      console.log('override layers', layersToReplace);
      console.log('text layer names', layerNames);

      minNumber = Number(UI.getStringFromUser("What's the min amount?", '0'));
      maxNumber = Number(UI.getStringFromUser("What's the max amount?", '0'));

      if (!minNumber || !maxNumber) {
        UI.alert('Danger Will Robinson', 'You must enter valid numbers!');
        return;
      }

      const layerOptions = [... new Set(layerNames)];
      const layerNamePrompt = UI.getSelectionFromUser(
        "Select layer name to override",
        layerOptions
      );

      const layerNameOk = layerNamePrompt[2];
      const layerNameSelection = layerOptions[layerNamePrompt[1]];

      if (layerNameOk) {
        layersToReplace = layersToReplace.filter(layer => layer.affectedLayer.name === layerNameSelection);
        layersToReplace.forEach((layer, i) => {
          const randomNumber = getRandomInt(minNumber, maxNumber);
          layer.value = '$' + numberWithCommas(randomNumber);
          runningTotal = runningTotal + randomNumber;
        });

        UI.alert('Total Dollars', `$${numberWithCommas(runningTotal)}`);
      }
    } else {
      UI.alert('Selection Error', 'This only works with symbols.');
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

