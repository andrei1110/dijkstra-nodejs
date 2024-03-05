const graphPath = process.argv[2];
const root = process.argv[3];
const graph = require(graphPath);

function dijkstra(graph, root) {
    const dist = [];
    const visited = [];
    const nodes = Object.keys(graph);

    for (const node of nodes) {
        dist[node] = Infinity;
    }
    
    dist[root] = 0;

    while (nodes.length) {
        nodes.sort((a, b) => dist[a] - dist[b]);
        const short = nodes.shift();

        if (dist[short] === Infinity) break;

        visited.push(short);

        for (const neighbor in graph[short]) {
            if (!visited.indexOf(neighbor) > -1) {
                const newDistance = dist[short] + graph[short][neighbor];
                
                if (newDistance < dist[neighbor]) {
                    dist[neighbor] = newDistance;
                }
            }
        }
    }

    return dist;
}

const result = dijkstra(graph, root);

result.forEach((val, idx) => {
    console.log(idx + ' => ' + val);
});