import React from 'react';
import '../../styles.css';
import logoec2 from "../../images/Compute_AmazonEC2.jpg"
import logoebs from "../../images/Storage_AmazonEBS.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EC2 = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logoec2} alt="EC2 Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is EC2?</h2>
                <ul>
                    <li>Web service providing resizeable compute capacity</li>
                    <li>Reduces time needed to obtain and boot new server instances to just minutes (as opposed to days)</li>
                    <li>Allowing us to quickly scale capacity (up, down, and even <i>out</i> by virtue of adding additional instances) in response to changing requirements</li>
                    <li>Changed <strong>economics</strong> of cloud computing</li>
                    <li>Only pay for capacity you <i>actually</i> use, no over-provisioning</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>EC2 Pricing Options</h2>
                <ul>
                    <li>On-demand Instances - Pay a fixed rate by the hour (or second) without commitment, e.g., <FontAwesomeIcon icon={["fab", "linux"]} size="lg" /> instances by the second, whereas <FontAwesomeIcon icon={["fab", "windows"]} /> instances by the hour</li>
                    <li>Reserved Instances - 1 or 3-year commitment for capacity reservations, providing significant discount for hourly rate of instance</li>
                    <li>Spot Instances - Allows us to bid whatever price we want for instance capacity, leading to even larger savings if apps have flexible start and end time, bid prices are constantly changing</li>
                    <li>Dedicated Hosts - Physical EC2 servers dedicated for our use, helps to reduce costs by allowing us to use our existing server-bound software licenses (e.g., VMWare, Oracle, SQL)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>On-Demand</h2>
                <ul>
                    <li>Ideal for users looking for the low cost and flexibility of EC2 without having to commit long-term or make up-front payments</li>
                    <li>Apps with short term/spiky/unpredictable workloads that <strong>cannot be interrupted</strong></li>
                    <li>Apps being developed and tested on EC2 for the first time (also great for learning)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Reserved Instances (RIs)</h2>
                <ul>
                    <li>Apps with steady state, i.e., predictable usage, e.g., web servers</li>
                    <li>Apps requiring reserved capacity</li>
                    <li>We can make up-front payments to reduce total compute costs even further, e.g., if we make a 3-year commitment and pay for it <i>all up-front</i>, we will maximize the discount</li>
                    <li>Standard RIs - Up to 75% cheaper than on-demand instances</li>
                    <li>Convertible RIs - Can change its attributes, <strong>given</strong> the conversion leads to the creation of RIs of <i>equal or greater value</i> - E.g., we can change reservations from CPU-intensive instances to more memory-intensive instances - Can be up to 54% cheaper than on-demand</li>
                    <li>Scheduled RIs - Can launch within the time window we reserve - Allows us to match capacity reservation with predictable recurring schedule that may only require compute for a fraction of a day/week/month at a time (e.g., month-end store sale on the last Friday)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Spot Instances</h2>
                <ul>
                    <li>Apps that have flexible start and end times</li>
                    <li>Apps that are only feasible at very low compute prices - E.g., big pharmaceutical, chemical, and genomics (genome) companies will use this to do large-scale computing at, for example, 4am on a Sunday morning</li>
                    <li>Those with an urgent need for large amounts of additional compute capacity</li>
                    <li>If instance is stopped by AWS then you will not be charged for a partial hour of usage, but if <strong>you</strong> stopped the instance you <i>will be</i> charged for the complete hour in which the instance ran</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Dedicated Hosts</h2>
                <ul>
                    <li>Useful for regulatory requirements that may be against multi-tenant virtualization</li>
                    <li>Ideal for licensing, which does not support multi-tenancy or cloud deployments</li>
                    <li>We can purchase on-demand (hourly)</li>
                    <li>We can also purchase as RIs for up to 70% off the on-demand price</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>EBS</h2>
                <ul>
                    <li>Elastic Block Storage</li>
                    <li>Virtual disk in the cloud</li>
                    <li>Allows us to create storage volumes and attach them to EC2 instances</li>
                    <li>Once attached to EC2, we can create a file system on top of these volumes, we can run a database, or use them in any other way we would a block device</li>
                    <li>They are placed in specific Availability Zones (AZs), where they are automatically replicated in order to protect us from disk failures (building redundancies)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>EBS Volume Types</h2>
                <ul>
                    <li>General Purpose SSD (GP2) - Balances both price and performance for a variety of workloads - Ratio of 3 IOPS per GB with up to 10,000 IOPS and the ability to burst up to  3000 IOPS for extended periods of time for volumes  at 3334 GiB and above</li>
                    <li>Provisioned IOPS SSD (IO1) - For I/O intensive (high-performance) apps such as large relational or non-relational databases - Highest performance SSD volume for mission-critical, low-latency or high-throughput workloads - We should use this when we need extreme performance, i.e., more than 10,000 IOPS - Can provision up to 20,000 IOPS per volume</li>
                    <li>Throughput Optimized HDD (ST1) - Low cost volume for frequently accessed, throughput-intensive workloads - Big data, data warehouses, log processing - Cannot be a boot volume</li>
                    <li>Cold HDD (SC1) - Cheapest storage for infrequently accessed workloads - E.g., file server - Cannot be a boot volume</li>
                    <li>Magnetic (Standard) - Previous generation (legacy) - Lowest cost per GB of all <strong>bootable</strong> volume types - Ideal for workloads where data is accessed infrequently, and for apps where cheapest storage cost necessary</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoebs} alt="EBS Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>CLI - Command Line Interface</h2>
                <ul>
                    <li>Secret access key - We only see this once in the console - If it isn't saved we have to delete the key pair (access key id and secret access key) and regenrate it - After regenerating we'll have to run 'aws configure' in the CLI again and insert the new key pair</li>
                    <li>Do not use just one access key - Do not have <i>one</i> key and share with all your team members - In case someone leaves unamicably then you will need to delete the key pair and <i>create a new one for every single person on your team, and they would all need to update their CLIs</i> - <stong>Create one key pair per team member</stong></li>
                    <li><strong>Do not save the key pair in any of your code, because you do not want to accidentally push this information to public repositories - Anyone can get the same access you have as a user to the AWS environment if they just have your key pair</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Reminders on IAM</h2>
                <ul>
                    <li>Least privilege - Always give your users the <strong>minimum</strong> level of access required - E.g., user may only need admin access over S3, in which case do not give them full admin access to the console, only give them admin access to S3</li>
                    <li>Create groups - Assign your users to groups - Your users will automatically inherit the permissions of the group and the group's permissions are set using policy documents</li>
                </ul>
            </div>
        </div>
    )

}

export default EC2;
