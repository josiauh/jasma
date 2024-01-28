class JasmaFunction {
    /**
     * Creates a JasmaFunction to add extra features.
     * @param {Function} func The function to call.
     * @constructor
     */
    constructor(func) {
        this.func = func
    }
    /**
     * Calls the JasmaFunction. 
     * @param {*} args The arguments to call. 
     */
    call = function(...args) {
        for (let index = 0; index < this.typechecks.length; index++) {
            const element = this.typechecks[index];
            if (typeof args[index] != element) {
                throw new TypeError(`Type of argument "${args[index]}" is not of type ${element}, but it is a ${typeof args[index]}.`)
            }
        }
        this.func(...args)
    }
    /**
     * The actual function that gets called. This can be overriden.
     */
    func = function() {}
    /**
     * The types to check. This could be something like:
     * ["string", "boolean"]
     */
    typechecks = []
}

module.exports.JasmaFunction = JasmaFunction