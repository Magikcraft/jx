declare const _exports: {
    /**
     * checks if an object has a specific entry, if not, sets it to a default value, then returns the entry
     * @param {*} object the object to check
     * @param {string} key the key to set and/or return
     * @param {*} placeholder the value to set if the existing value is undefined
     */
    auto: (object: any, key: string, placeholder: any) => any;
    /**
     * converts a space-seperated string to camel case
     * @param {string} text the string to convert
     * @returns {string} the converted text
     */
    camel: (text: string) => string;
    /**
     * this is better explained by looking at the source code...
     *
     * checks each superclass of the input class for a matching string
     * @param {*} subject the class to check
     * @param {string} filter the filter string
     * @returns {boolean} true if match was found, false if no match was found
     */
    class: (subject: any, filter: string) => boolean;
    /**
     * return the closest non-player entity to a command sender (player, command block, console)
     * @param {*} sender the command sender
     * @returns {*} the non-player entity if one was found
     */
    close: (sender: any) => any;
    /**
     * return the distance between 2 locations, ignoring the Y axis
     *
     * @param {*} loc1 the first location
     * @param {*} loc2 the second location
     * @returns {number} the calculated distance (infinity if locations are in seperate dimensions)
     */
    dist2: (loc1: any, loc2: any) => number;
    /**
     * return the distance between 2 locations
     *
     * @param {*} loc1 the first location
     * @param {*} loc2 the second location
     * @returns {number} the calculated distance (infinity if locations are in seperate dimensions)
     */
    dist3: (loc1: any, loc2: any) => number;
    /**
     * returns the integer for roman numerals I-X
     * @param {string} roman the roman numeral to convert
     * @returns {number} the corresponging integer
     */
    integer: (roman: string) => number;
    /**
     * converts a server location into an object
     *
     * if input is not a server location, return input as-is
     * @param {*} loc the server location to convert
     * @returns {*} the object
     */
    json: (loc: any) => any;
    /**
     * converts an object into a server location
     *
     * if input is a server location, return input as-is
     * @param {*} json the object to convert
     * @returns {*} the server location
     */
    loc: (json: any) => any;
    /**
     * converts a space-seperated string to pascal case
     * @param {string} text the string to convert
     * @returns {string} the converted text
     */
    pascal: (text: string) => string;
    /**
     * returns the roman numeral for integers 1-10
     * @param {number} integer the number to convert
     * @returns {string} the corresponging roman numeral
     */
    roman: (integer: number) => string;
    /**
     * this is better explained by looking at the source code...
     *
     * for each node provided, auto-fill undefined contexts along the data path
     * @param {*} context the inital context
     * @param {*} nodes the nodes to auto-fill
     * @returns {*} the final context
     */
    traverse: (context: any, nodes: any) => any;
};
export = _exports;
