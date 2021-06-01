---
title: 'Formik + Typescript'
date: '2021-05-09'
featuredImage: '../../assets/bg1.jpeg'
tags: ['react', 'typescript']
---

Cześć! Chciałbym się podzielić moimi spostrze.

_Ten artykuł zakłada ze jesteś zaznajomiony z podstawowym działaniem reacta i typescipta_

### Formularzy

Są dwa sposoby na stworzenie formularza:

#### Formik

```tsx
<Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form>...</Form>
</Formik>
```

-   Polega na React Context

#### useFormik

```tsx
const { values } = useFormik({ initialValues, onSubmit })
```

-   Nie polega na React Context

### Pole formularza

Załuzmy ze jest zdefiniowany komponent

```tsx
type InputFieldProps = {
    name: string
    value: string
    label: string
    onChange: (e: { target: { name: string; value: string } }) => void
}

const InputField = ({ label, ...inputProps }: InputFieldProps) => {
    return (
        <label>
            {label}
            <input type="text" {...props} />
        </label>
    )
}
```

#### Field + render props

```tsx
<Field name="firstName">
    {({ field }) => <InputField {...field} label="Imię" />}
</Field>
```

Przy uzywaniu komponentu Field korzystamy z kontekstu

#### Field + as prop

```tsx
<Field name="firstName" as={InputField} label="Imię" />
```

#### Bezpośrednie wyciągnięcie propsów z formikowych helperów

```tsx
<InputField
    name="firstName"
    onChange={handleChange}
    value={values.firstName}
    label="Imię"
/>
```
