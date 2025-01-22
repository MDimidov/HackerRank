using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;



class Result
{

    /*
     * Complete the 'maxCost' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY cost
     *  2. STRING_ARRAY labels
     *  3. INTEGER dailyCount
     */

    public static int maxCost(List<int> cost, List<string> labels, int dailyCount)
    {
        int maxCost = 0;
        int dailyCost = 0;
        int currDays = 0;
        while (labels.Count > 0 && cost.Count > 0)
        {

            if (labels[0] == "illegal")
            {
                dailyCost += cost[0];
            }
            else if (labels[0] != "illegal")
            {
                currDays++;
                dailyCost += cost[0];

                if (currDays == dailyCount)
                {
                    currDays = 0;
                    if (dailyCost > maxCost)
                    {
                        maxCost = dailyCost;
                    }
                    dailyCost = 0;
                }

            }

            cost.RemoveAt(0);
            labels.RemoveAt(0);
        }

        return maxCost;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH")!, true);

        int costCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> cost = new List<int>();

        for (int i = 0; i < costCount; i++)
        {
            int costItem = Convert.ToInt32(Console.ReadLine().Trim());
            cost.Add(costItem);
        }

        int labelsCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<string> labels = new List<string>();

        for (int i = 0; i < labelsCount; i++)
        {
            string labelsItem = Console.ReadLine();
            labels.Add(labelsItem);
        }

        int dailyCount = Convert.ToInt32(Console.ReadLine().Trim());

        int result = Result.maxCost(cost, labels, dailyCount);

        Console.WriteLine(result);

        //textWriter.Flush();
        //textWriter.Close();
    }
}
