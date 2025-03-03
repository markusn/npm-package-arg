var npa = require('..')

require('tap').test('registry', function (t) {
  t.setMaxListeners(999)

  var tests = {
    'registry:https://internal.com#othername@1.x': {
      name: 'othername',
      escapedName: 'othername',
      type: 'range',
      saveSpec: null,
      fetchSpec: '1.x',
      raw: 'registry:https://internal.com#othername@1.x',
      rawSpec: '1.x',
      registry: true,
      registryUrl: 'https://internal.com',
    },

    'registry:https://other-internal.com#forked@2.3.x': {
      name: 'forked',
      escapedName: 'forked',
      type: 'range',
      saveSpec: null,
      fetchSpec: '2.3.x',
      raw: 'registry:https://other-internal.com#forked@2.3.x',
      rawSpec: '2.3.x',
      registry: true,
      registryUrl: 'https://other-internal.com',
    },

    'registry:https://security-provider.com#patched@^1.4 || 2': {
      name: 'patched',
      escapedName: 'patched',
      type: 'range',
      saveSpec: null,
      fetchSpec: '^1.4 || 2',
      raw: 'registry:https://security-provider.com#patched@^1.4 || 2',
      rawSpec: '^1.4 || 2',
      registry: true,
      registryUrl: 'https://security-provider.com',
    },
  }

  Object.keys(tests).forEach(function (arg) {
    var res = npa(arg)
    t.ok(res instanceof npa.Result, arg + ' is a result')
    t.has(res, tests[arg], arg + ' matches expectations')
  })

  t.end()
})
