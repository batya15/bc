require.config({
    waitSeconds: 15,
    baseUrl: '/',
    paths: {
        'react': 'vendor/js/react',
        'reflux': 'vendor/js/reflux',
        'react-simpletabs': 'vendor/js/react-simpletabs'
    },
    map: {
        '*' : {
            'css': 'vendor/js/css'
        }
    }
});