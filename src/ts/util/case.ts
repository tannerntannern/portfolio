// Types of case conversions that are supported
type Case = 'camel' | 'title';

const capitalizeEachWord = (input: string[]) => input.map(word => word[0].toUpperCase() + word.slice(1));

// Separates a string into an array of lowercase words, based on the type of case it originally was
const separators: {[K in Case]: (input: string) => string[]} = {
	camel: (input) => input.replace(/([A-Z])/g, ' $1').toLowerCase().split(' '),
	title: (input) => input.toLowerCase().split(' ')
};

// Joins an array of lowercase words into a single string in the
const mergers: {[K in Case]: (input: string[]) => string} = {
	camel: (input) => input[0] + capitalizeEachWord(input.slice(1)).join(''),
	title: (input) => capitalizeEachWord(input).join(' ')
};

/**
 * Converts the given string from one case to another.
 *
 * @param string - input string
 * @param from - original case of the string
 * @param to - case that we want to convert to
 */
export default function(string: string, from: Case, to: Case): string {
	return mergers[to](separators[from](string));
};
