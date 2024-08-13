# Command to execute the jobs & view results
#-->navigate to jobs folder
# a. for console interactive results from container


$ kubectl apply -f job_console_exec.yaml

$ kubectl get pods -o wide
NAME                                      READY   STATUS    RESTARTS   AGE   IP          NODE                                        NOMINATED NODE   READINESS GATES
emanager-apitest-job-bqqfm                1/1     Running   0          26m   10.0.1.25   gke-alphacluster-alpha-pool-77507077-9jc0   <none>           <none>

$ kubectl logs emanager-apitest-job-bqqfm
