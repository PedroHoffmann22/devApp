import React, { useState } from "react";
import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const App = () => {

    return (
<View>
<Link href="/banco">
<Text>Banco</Text>
</Link>
<Link href="/calculadora">
    <Text>Calculadora</Text>
</Link>
<Link href="/lista">
<Text>Lista</Text>
</Link>
<Link href="/pokemon">
<Text>Pokemon</Text>
</Link>
<Link href="/splash">
<Text>Splash</Text>
</Link>
<Link href="/taskHub">
<Text>TaskHub</Text>
</Link>

</View>
    )
}

export default App;