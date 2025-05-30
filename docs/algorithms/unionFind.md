# 并查集(Disjoint Set Union)

## 核心概念
- **父节点数组**：记录每个元素的父节点
- **秩数组**：记录树的深度(用于按秩合并)
- **路径压缩**：查询时扁平化树结构
- **按秩合并**：防止树退化为链表

## 时间复杂度
| 操作        | 未优化 | 路径压缩+按秩合并 |
|-----------|-----|------------|
| 查找(find) | O(n) | O(α(n))  |
| 合并(union) | O(n) | O(α(n))  |

## Java实现
```java
class UnionFind {
    int[] parent;
    int[] rank;

    public UnionFind(int size) {
        parent = new int[size];
        rank = new int[size];
        for (int i = 0; i < size; i++) {
            parent[i] = i;
            rank[i] = 1;
        }
    }

    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // 路径压缩
        }
        return parent[x];
    }

    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX != rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX] += 1;
            }
        }
    }
}
```

## 应用场景
1. 朋友圈问题(LeetCode 547)
2. 岛屿数量问题(LeetCode 200)
3. 最小生成树(Kruskal算法)
4. 网络连通性检测

## 复杂度证明
α(n)是阿克曼函数的反函数，增长极其缓慢，对于任何实际应用的n值，α(n) ≤ 5