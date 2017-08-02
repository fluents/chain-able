# cast
> cast & coerce values

# todo 
- [ ] `curry(2, coerce(type, arg))`
- [ ] add `serialize` for persisting & hydrating with strings, using `new Function` as needed (mark in metadata)

# resources
- http://duktape.org/guide.html#type-conversion-and-testing

# why?
> TypeGuards

(_the assumption based on research & testing the compiled code, though it is likely there are more things to check and more known unknowns_)

- megamorphic code wrapping the monomorphic code is perfect
- with the arg casting, it makes a solid decision tree, which ends up just becoming a `GO TO LINE#` -> `easily optimized cast function`
"
- this is how typescript should compile
- this is likely why lodash has internal functions called `base`
- the other way to handle it is throw errors with invalid types