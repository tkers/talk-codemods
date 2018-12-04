export default function transform(file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  const x = root
  	.find(j.ClassDeclaration)
  	.find(j.MethodDefinition, { kind: 'constructor' })
    .remove()

  return root.toSource()
}
