[[toc]]

## 128.最长连续序列
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。


解题思路：
1、去重set,定义maxlength = 0；cunrntValue = 
2、遍历数组，
  当前值curentValue=x，
  判断set中是否存在x+1，如果存在则length++，
  判断set中是否存在x+2，如果存在则length++，
  判断set中是否存在x+y，如果不存在，nextValue
  当前值为x+y，匹配结束，长度为 maxlength=y+1

  当前值curentValue=x+1，
  判断set中是否存在x+1 + 1，如果存在则length++ .......
  ....
  maxlength = max(length,maxlength)
  上述过程中，时间复杂度最坏情况下还是会达到 O(n^2)
  （即外层需要枚举 O(n)个数，内层需要暴力匹配 O(n)次）

  已知x,x+1,x+2,⋯,x+y 的连续序列，
  而我们重新从x+1开始匹配，得到的结果肯定不会优于x为起点
  因此，外层循环碰到上述情况需要跳过。
  即需要枚举的数x一定是不能在数组中存在前驱数x-1，若存在则跳过外层循环

::: details 点我查看代码
```java
class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> sets = new HashSet<>();
        for (int num : nums) {
            sets.add(num);
        }
        
        int maxLength = 0;
        for(int set : sets) {
            if(sets.contains(set - 1)) {//优化时间复杂度
                continue;
            }

            int curentLength = 1;
            int currentNumm = set;
            while(sets.contains(currentNumm + 1)) {
                curentLength++;
                currentNumm = currentNumm + 1;
            }
            maxLength = Math.max(maxLength, curentLength);
        }
        return maxLength;
    }
}
```
:::



## 49. 字母异位词分组
给你一个字符串数组，请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表。
**字母异位词**  是由重新排列源单词的所有字母得到的一个新单词。

 
示例 1:
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

解：请你将 字母异位词 组合在一起, 分组
互为字母异位词的两个字符串包含的字母相同，
因此对两个字符串分别进行排序之后得到的字符串一定是相同的，
故可以将排序之后的字符串作为哈希表的键。
Map<String, List<String>> map = new HashMap<>();

//查找已有值
```java
List<String> list = map.getOrDefault(key, new ArrayList<String>());
list.add(str);//新增当前值
map.put(key, list);
```

## 283. 移动零
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
请注意 ，必须在不复制数组的情况下原地对数组进行操作。

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

解法一：双指针
1、定义一个指针j，用来记录当前有多少个非0的元素
2、第一次遍历时，遇到非0元素就移动到数组左边，i++，j++
  第一次遍历完后，j 指针的下标就指向了最后一个 非0 元素下标。
3、第二次遍历，从j开始到结束的位置，将这部分位置置为0

//第一次遍历的时候，j指针记录非0的个数，只要是非0的统统都赋给nums[j]
```java
int j = 0;
for(int i=0;i<nums.length;++i) {
    if(nums[i]!=0) {
        nums[j++] = nums[i];
    }
}
```
