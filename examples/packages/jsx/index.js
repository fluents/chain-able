// normally these would be come in the form of ES2015 import statements
const {render, Component, version} = Inferno
const Chain = Chainable

const chain = new Chain()
const now = () => Date.now()
const prettyDate = x => new Date(x).toLocaleTimeString()

chain
  .methods('time')
  .build()
  .transform('time', x => now())
  .transform('time', prettyDate)

const clock = jsx()
clock.state = {chain}
clock.didMount(() => (clock.timer = setInterval(chain.time, 1000)))
clock.willUnmount = () => clearInterval(clock.timer)

// or .end('span') .span('/>') or .span(';')
clock.render(() =>
  chain
    .div({class: 'eh'})
    .span({onClick: console.log})
    .text(chain.get('time'))
    .end()
    .end()
)

chain.observe('time', time => clock.update())

// render an instance of Clock into <body>:
render(clock, document.getElementById('container'))
