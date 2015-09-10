require.config({
    waitSeconds: 15,
    baseUrl: '/',
    paths: {
        'react': 'vendor/js/react',
        'reflux': 'vendor/js/reflux'
    },
    map: {
        '*' : {
            'css': 'vendor/js/css'
        }
    }
});