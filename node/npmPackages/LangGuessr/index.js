import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const arg = process.argv[2];
try {
  const langCode = franc(arg);
  if (langCode === 'und') {
    console.log(
      colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!")
    );
  } else {
    const language = langs.where('3', langCode);
    console.log(langCode)
    console.log(colors.green(`Our best guess is: ${language.name}`));
  }
} catch (error) {
  console.log('An Error occurred', error);
}
