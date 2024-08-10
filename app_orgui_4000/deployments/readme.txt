# USe the deployment & services file

kubectl apply -f <dep.yaml>
kubectl apply -f <service.yaml>

# get the ip address (external ip)
kubectl get services -o wide 

# access the application outside cluster by browsing http://<external Ip of load balancer service>

# rem - port 3000 is not reqiured as it container target port & port 80 the input port , so http://<External Ip> is enough

